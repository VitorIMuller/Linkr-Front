import userContext from "../../Contexts/userContext";
import { useContext, useState } from "react";


export default function Timeline() {
    const { user, token } = useContext(userContext)

    const [loading, setLoading] = useState();
    const [error, setError] = useState();

}