import { useState } from "react";
import "../../scss/style.scss";
import "./CheckoutForm.scss";
import { createBuyOrder, getOrderById } from "../../services/firestore";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cartCntx } from "../Context/cartContext";
import { useContext } from "react";
import Input from "./Input/Input";

function CheckoutForm(){
    const [dataForm, setDataForm] = useState({
        name : "",
        mail : "",
        phone: "",
    });
    const [buyFullfilled, setBuyFullfilled] = useState(false);
   
    const {cart, clear, getTotalCartPrice} = useContext(cartCntx);
    const [order, setOrder] = useState({});

    function submitHandler(evt){
        evt.preventDefault();
        if(validInputs()){

            const dataOrder = {
                buyer: dataForm,
                items: cart,
                date : new Date(),
                total: getTotalCartPrice(),
            }

            createBuyOrder(dataOrder).then(response=>{
                getOrderById(response).then(res=>{
                    setOrder(res);
                    setBuyFullfilled(true);
                });
            });

            clear();
        } else {
            toast.error((dataForm.mail.trim() === "" || dataForm.name.trim() === "" || dataForm.phone === "")? 'Complete todos los campos':'Ingrese un mail correcto');
        }
        
    }

    function onChangeHandler(evt){
        let input = evt.target.name;
        let value = evt.target.value;

        const newDataForm = {...dataForm};

        newDataForm[input] = value;
        setDataForm(newDataForm);
    }

    function validInputs(){
        return dataForm.mail.trim() !== "" && dataForm.mail.includes("@") && dataForm.mail.includes(".") && dataForm.name.trim() !== "" && dataForm.phone !== "";
    }

    function onKeyDownHandler(evt){        
        (evt.target.value.length < 8 && ((evt.keyCode >= 48 && evt.keyCode <= 57 && !evt.shiftKey) || evt.key === "-" || evt.keyCode === 8 || evt.preventDefault())) || evt.keyCode === 8 || evt.preventDefault();
    }

    if(buyFullfilled){
        return(
            <div className="formContainer flexible--column" >
                <h1 className="mainTitle">Gracias {order.buyer.name} por su Compra!</h1>
                <div className="dataOrder">
                    <p>Id de compra: {order.id}</p>
                    <p>Total: ${order.total}</p>
                </div>
            </div>
        );
    }


    return(
        <div className="formContainer flexible--column">
            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                />
            <h1 className="mainTitle">Formulario de Compra</h1>
            <form onSubmit={submitHandler} className="flexible--column form">

                <Input name="name" placeholder="Ej: José Pérez" onChange={onChangeHandler}>Nombre</Input>
        
                <Input name="mail" placeholder="Ej: ejemplo@mail.com" onChange={onChangeHandler}>Mail</Input>

                <Input name="phone" placeholder="Ej: 444-5555" onChange={onChangeHandler} onKeyDown={onKeyDownHandler}>Teléfono</Input>

    
                                    
                <button type="submit" className="button--green">Finalizar Pago</button>  
                <button type="reset" className="button--red">Limpiar</button>  
            </form>
        </div>
        
    );
}

export default CheckoutForm;