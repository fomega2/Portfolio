import ANE from '../media/images/ane.png'
import DGAC from '../media/images/DGAC.png'
import LineGestion from '../media/images/LineGestion.png'
import PatientAdminImg from '../media/images/PatientAdminImg.png'

export const ProyectsInfoConstant = [
    {
        Name: "Patient Manager",
        Description: "Simple app using local storage and react with vite",        
        Stack: "React - VITE - Tailwind",        
        Link: "",
        ImageRoute: ANE,        
    },
    {
        Name: "PJ Line Gestion",
        Description: "Site of Judiciary of Costa Rice, wheren I've worked and some modules",        
        Stack: "Angular - .Net - Rest API - SqlServer",        
        Link: "https://pjenlinea.poder-judicial.go.cr/GestionEnLinea/inicio#googtrans(es%7Ces)",
        ImageRoute: LineGestion,        
    },
    {
        Name: "DGAC",
        Description: "Invoice DGAC System of Costa Rica Civil Aviation",        
        Stack: ".Net 5, .Net MVC, Sql Server, Jquery",        
        Link: "https://cetacfacturacion.dgac.go.cr/",
        ImageRoute: DGAC,        
    },
    {
        Name: "ANE",
        Description: "Free service that facilitates contact between job seekers and companies that require human talent",        
        Stack: ".Net Framework (C#), .Net MVC, Sql Server, Jquery",        
        Link: "https://www.ane.cr/",
        ImageRoute: PatientAdminImg,        
    }        
];