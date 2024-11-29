import { Grid2 } from "@mui/material"
import Card from "./Card"

const RoleSelection = ({ operation }: { operation: string }) => {
    return (
        <Grid2
            container
            spacing={3}
            justifyContent='center'
            alignItems='center'
            mt={5}
            p={3}
        >
            <Card
                role="User"
                operation={operation}
            />
            <Card
                role="Author"
                operation={operation}
            />
        </Grid2>
    )
}

export default RoleSelection