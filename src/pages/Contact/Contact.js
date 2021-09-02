import React from "react"
import "./Contact.css"
import styled from "styled-components"


function Contact() {
  return (
    <Section>
      <Container>
        <div className="container-contact100" />
        
        <div className="wrap-contact100">
          <form className="contact100-form validate-form">
            <span className="contact100-form-title">Escribeme</span>

            <div
              className="wrap-input100 validate-input"
              data-validate="Nombre es requerido"
            >
              <input
                className="input100"
                type="text"
                name="name"
                placeholder="Nombre"
              />
              <span className="focus-input100-1"></span>
              <span className="focus-input100-2"></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="El email es requerido: ex@abc.xyz"
            >
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="Email"
              />
              <span className="focus-input100-1"></span>
              <span className="focus-input100-2"></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Campo requerido"
            >
              <textarea
                className="input100"
                name="message"
                placeholder="Mensaje"
              ></textarea>
              <span className="focus-input100-1"></span>
              <span className="focus-input100-2"></span>
            </div>

            <div className="container-contact100-form-btn">
              <button className="contact100-form-btn">Enviar</button>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  )
}
export default Contact

const Section = styled.section`
  width: 100%;
  height: 100%;
`
const Container = styled.div`
  background: whitesmoke;
  display: flex;
  justify-content: center;
  color: aliceblue;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;

  @media screen and (max-width: 540px) {
    margin-bottom: 100px;
  }
`
