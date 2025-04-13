import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Service } from "../../app/models/service"

type Props = {
    service: Service
}

export default function ServiceCard({ service }: Props) {
    return (
        <Card
            elevation={3}
            sx={{
                width: 280,
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: "space-between"
            }}
        >
            <CardMedia
                sx={{ height: 240, backgroundSize: 'cover' }}
                image={service.pictureUrl}
                title={service.name}
            />
            <CardContent>
                <Typography
                    gutterBottom
                    sx={{ textTransform: 'uppercase' }}
                    variant="subtitle2">
                    {service.name}
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ color: 'secondary.main' }}
                >
                    ${(service.price / 100).toFixed(2)}

                </Typography>
            </CardContent>
            <CardActions
                sx={{ justifyContent: 'space-between' }}
            >
                <Button>Add to cart</Button>
                <Button>View</Button>
            </CardActions>
        </Card>
    )
}