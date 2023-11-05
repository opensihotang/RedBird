import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/action/actionCreator";
import { Link, useNavigate } from "react-router-dom";


export default function FormLogin() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await dispatch(loginUser(data))
            navigate('/')
        } catch (err) {
            console.log(err);
        }
    }

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
    }

    const formStyle = {
        width: "50%",
        padding: "20px",
    }
    return (
        <section style={containerStyle}>
            <form onSubmit={handleSubmit} style={formStyle}>
                <h1>Please login first</h1>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={data.email}
                        onChange={(event) => handleChange(event)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={data.password}
                        onChange={(event) => handleChange(event)} />
                </div>
                <Link to="/">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Link>
            </form>
        </section>
    )
}