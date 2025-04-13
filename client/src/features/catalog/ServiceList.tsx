import { Box } from "@mui/material";
import { Service } from "../../app/models/service";
import ServiceCard from "./ServiceCard";

type Props = {
    services: Service[];

}

export default function ServiceList({ services }: Props) {
    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent:'center'}}>
            {services.map(service => (
                <ServiceCard  key={service.id} service={service} />
            ))}
        </Box>
    )
}