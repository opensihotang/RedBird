import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { loginUser } from "../store/action/actionCreator";
import { useNavigate } from "react-router-dom";


export default function FormLogin() {
    // const dispatch = useDispatch()
    // const navigate = useNavigate()
    // const [data, setData] = useState({
    //     email: "",
    //     password: ""
    // })

    // const handleChange = (event) => {
    //     setData({
    //         ...data,
    //         [event.target.name]: event.target.value
    //     })
    // }

    // const handleSubmit = async (event) => {
    //     event.preventDefault()
    //     try {
    //         await dispatch(loginUser(data))
    //         toast.success("success")
    //         navigate('/')
    //     } catch (err) {
    //         toast.error("Invalid Login")
    //         console.log(err);
    //     }
    // }

    const containerStyle = {
        display: "flex",
        // Mengatur tinggi viewport agar komponen berada di tengah layar
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
    };

    const formStyle = {
        width: "50%",
        padding: "20px",
        backgroundColor: "#f8f9fa", // Warna latar belakang form
        borderRadius: "8px", // Sudut elemen form
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Bayangan elemen form
    };

    const h1Style = {
        fontSize: "24px", // Ukuran font judul
        textAlign: "center",
        marginBottom: "20px", // Jarak antara judul dan input fields
    };

    const inputStyle = {
        width: "100%",
        marginBottom: "10px",
        padding: "10px",
        borderRadius: "4px", // Sudut elemen input
        border: "1px solid #ccc", // Garis tepi elemen input
    };

    const buttonStyle = {
        width: "100%",
        padding: "10px",
        backgroundColor: "#007bff", // Warna tombol
        color: "#fff", // Warna teks tombol
        borderRadius: "4px", // Sudut tombol
        border: "none",
        cursor: "pointer",
    };

    return (
        <section style={containerStyle}>
            <form style={formStyle}>
                <h1 style={h1Style}>Please login first</h1>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        style={inputStyle}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        style={inputStyle}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <button type="submit" className="btn btn-primary" style={buttonStyle}>
                    Submit
                </button>
            </form>
        </section>
    );

}