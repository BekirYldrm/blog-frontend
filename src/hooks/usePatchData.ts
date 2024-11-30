import { useState } from "react";
import { patchPrivateData } from "../api/api";


interface UsePatchDataResult {
    patch: (url: string, token: string) => Promise<void>
    errorMessage: string | null;
    setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>
    successMessage: string | null
}

export function usePatchData(): UsePatchDataResult {

    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const patch = async (url: string, token: string) => {
        try {
            await patchPrivateData(url, token)
            setErrorMessage(null)
            setSuccessMessage("Successful")
        }
        catch (error: any) {

            if (error.response) {
                setErrorMessage(error.response.data.message)
            } else {
                setErrorMessage("An unexpected error occurred.")
            }
        }
    }

    return { patch, errorMessage, setErrorMessage, successMessage };
}
