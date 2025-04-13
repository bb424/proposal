import { Service } from "../../app/models/service"
import ServiceList from "./ServiceList";

type Props = {
  services: Service[];
}

export default function Catalog({ services }: Props) {
  return (
    <>
      <ServiceList services={services} />
    </>
  )
}