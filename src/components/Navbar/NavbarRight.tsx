import { Avatar, Box, Grid2, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { MouseEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPrivateData } from "../../api/api";
import { AuthorResDTO, UserProfileDTO } from "../../types/types";
import getFieldToken from "../../utils/authUtils";

const NavbarRight = () => {
    const navigate = useNavigate()

    const token = localStorage.getItem("authToken")
    const role = localStorage.getItem("role")
    const field = token ? getFieldToken() : null

    const [userProfile, setUserProfile] = useState<UserProfileDTO | null>(null)
    const [authorProfile, setAuthorProfile] = useState<AuthorResDTO | null>(null)
    const [anchorUserEl, setAnchorUserEl] = useState<null | HTMLElement>(null)

    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => setAnchorUserEl(event.currentTarget);
    const handleCloseUserMenu = () => setAnchorUserEl(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!token || !field) return

            try {
                if (role === "user") {
                    const data = await getPrivateData<UserProfileDTO>(`/users/profile/${field}`, token)
                    setUserProfile(data);
                } else if (role === "author") {
                    const data = await getPrivateData<AuthorResDTO>(`/authors/profile/${field}`, token)
                    setAuthorProfile(data)
                }
            } catch (error) {
                console.error("Hata:", error)
            }
        }

        fetchData()
    }, [role, token, field])

    const getProfileName = () => {
        if (role === "user" && userProfile) {
            return userProfile.username
        }
        if (role === "author" && authorProfile) {
            return `${authorProfile.firstName} ${authorProfile.lastName}`
        }
        return "menu"
    }

    const getProfileImage = () => {
        if (role === "user" && userProfile) {
            return userProfile.image
        }
        if (role === "author" && authorProfile) {
            return authorProfile.image
        }
        return undefined
    }

    return (
        <Box display="flex" flex={1} justifyContent="flex-end">
            <Grid2 container spacing={1} alignItems="center">

                {
                    token && field && role == "author"
                    &&
                    <Tooltip title="create a blog" arrow>
                        <IconButton
                            onClick={() => navigate("/create/blog")}
                            sx={{
                                borderRadius: "50%",
                                width: { xs: 25, sm: 30, md: 35, lg: 40 },
                                height: { xs: 25, sm: 30, md: 35, lg: 40 },
                                background: "linear-gradient(45deg, #6a11cb, #2575fc)",
                                color: "#fff",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                                transition: "transform 0.2s, box-shadow 0.2s",
                                "&:hover": {
                                    transform: "scale(1.1)",
                                    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.35)",
                                    background: "linear-gradient(45deg, #2575fc, #6a11cb)",
                                },
                            }}
                        >
                            +
                        </IconButton>
                    </Tooltip>
                }

                <Tooltip title={getProfileName()} arrow>
                    <IconButton
                        onClick={handleOpenUserMenu}
                        sx={{
                            p: 0,
                            width: { xs: 40, sm: 50, md: 60, lg: 70 },
                            height: { xs: 40, sm: 50, md: 60, lg: 70 }
                        }}
                    >
                        <Avatar
                            src={getProfileImage()}
                            sx={{ width: '100%', height: '100%' }}
                        />
                    </IconButton>
                </Tooltip>

                <Menu anchorEl={anchorUserEl} open={Boolean(anchorUserEl)} onClose={handleCloseUserMenu}>
                    {token && role && field ? (
                        <Box>
                            <MenuItem
                                onClick={() => {
                                    handleCloseUserMenu()
                                    role == "user" ? navigate("/user/profile") : navigate("/author/profile")
                                }}
                            >
                                <Typography fontSize={{ xs: 12, sm: 14, md: 16, lg: 18 }}>
                                    Profile
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => {
                                localStorage.clear()
                                setUserProfile(null)
                                setAuthorProfile(null)
                                navigate("/")
                            }}>
                                <Typography fontSize={{ xs: 12, sm: 14, md: 16, lg: 18 }}>
                                    Log Out
                                </Typography>
                            </MenuItem>
                        </Box>
                    ) : (
                        <Box>
                            <MenuItem
                                onClick={() => {
                                    handleCloseUserMenu();
                                    navigate("/login");
                                }}
                            >
                                <Typography fontSize={{ xs: 12, sm: 14, md: 16, lg: 18 }}>
                                    Login
                                </Typography>
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    handleCloseUserMenu();
                                    navigate("/signup");
                                }}
                            >
                                <Typography fontSize={{ xs: 12, sm: 14, md: 16, lg: 18 }}>
                                    Sign Up
                                </Typography>
                            </MenuItem>
                        </Box>
                    )}
                </Menu>

            </Grid2>
        </Box >
    );
};

export default NavbarRight;
