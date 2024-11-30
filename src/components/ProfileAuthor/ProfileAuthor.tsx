import { Grid2 } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetchPrivateData } from "../../hooks/useFetchPrivateData";
import { usePatchData } from "../../hooks/usePatchData";
import { AuthorType } from "../../types/types";
import ProfileAvatar from "./ProfileAvatar ";
import ProfileEmail from "./ProfileEmail";
import ProfileImage from "./ProfileImage";
import ProfileName from "./ProfileName";
import ProfilePassword from "./ProfilePassword";

const ProfileAuthor = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const authorId: number = location.state
    const token: string = localStorage.getItem("authToken")!
    const url = `/authors/my-info/${authorId}`

    const { data: author } = useFetchPrivateData<AuthorType>(url, token)
    const { patch, errorMessage, setErrorMessage, successMessage } = usePatchData()

    const [password, setPassword] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [image, setImage] = useState<string>("")
    const [emailChanged, setEmailChanged] = useState<boolean>(false)
    const [passwordChanged, setPasswordChanged] = useState<boolean>(false)
    const [imageChanged, setImageChanged] = useState<boolean>(false)

    useEffect(() => {
        if (author) {
            setEmail(author.email)
            setPassword(author.password)
            setImage(author.image)
        }
    }, [author])

    useEffect(() => {
        if (email === author?.email) {
            setEmailChanged(false)
        } else {
            setEmailChanged(true)
        }
    }, [email, author?.email, password, author?.password])

    useEffect(() => {
        if (password === author?.password) {
            setPasswordChanged(false)
        }
        else {
            setPasswordChanged(true)
        }

    }, [password, author?.password])

    useEffect(() => {
        if (image === author?.image) {
            setImageChanged(false)
        }
        else {
            setImageChanged(true)
        }

    }, [image, author?.image])


    useEffect(() => {
        if (errorMessage) {
            alert(errorMessage)
        }
    }, [errorMessage])

    useEffect(() => {
        if (successMessage) {
            alert("The changes have been saved successfully. You are directed to the login page.")
            localStorage.clear()
            navigate("/author/login")
        }
    }, [successMessage])

    const handleSaveEmail = async (e: React.FormEvent) => {
        e.preventDefault()
        const token = localStorage.getItem("authToken")
        if (token) {
            const url = `/authors/email/${authorId}?email=${email}`
            await patch(url, token)
        }
    }

    const handleSavePassword = async (e: React.FormEvent) => {
        e.preventDefault()
        const token = localStorage.getItem("authToken")

        if (token) {
            const url = `/authors/password/${authorId}?password=${password}`
            await patch(url, token)
        }
    }

    const handleSaveImage = async (e: React.FormEvent) => {
        e.preventDefault()
        const token = localStorage.getItem("authToken")
        if (token) {
            const url = `/authors/image/${authorId}?image=${image}`
            await patch(url, token)
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        setErrorMessage(null)
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
        setErrorMessage(null)
    }

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        setImage(e.target.value)
        setErrorMessage(null)
    }

    return (
        <Grid2 mb={2} container size={12} justifyContent='center' mt={2}>

            <Grid2
                container
                size={{ xs: 12, md: 4 }}
                spacing={2}
                justifyContent="center"
                alignContent="center"
            >
                <ProfileAvatar author={author} />
            </Grid2>

            <Grid2
                container
                size={{ xs: 12, md: 4 }}
                justifyContent={{ xs: 'center', md: 'left' }}
                spacing={2}
                p={1}
            >

                <ProfileName author={author} />

                <ProfileEmail
                    email={email}
                    emailChanged={emailChanged}
                    handleEmailChange={handleEmailChange}
                    handleSaveEmail={handleSaveEmail}
                />

                <ProfilePassword
                    password={password}
                    passwordChanged={passwordChanged}
                    handlePasswordChange={handlePasswordChange}
                    handleSavePassword={handleSavePassword}
                />

                <ProfileImage
                    image={image}
                    imageChanged={imageChanged}
                    handleImageChange={handleImageChange}
                    handleSaveImage={handleSaveImage}
                />

            </Grid2 >
        </Grid2 >
    )
}


export default ProfileAuthor