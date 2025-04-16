import { useEffect, useState } from "react";
import { Service } from "../../app/models/service"
import ServiceList from "./ServiceList";

export default function Catalog() {
  const [services, setServices] = useState<Service[]>([]);
  
  useEffect(() => {
      fetch('https://localhost:5002/api/services')
        .then(response => response.json())
        .then(data => setServices(data))
  
    }, [])
    
    return (
    <>
      <ServiceList services={services} />
    </>
  )
}