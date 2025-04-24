# QA Automation | Cypress & Node.js 🚀

Este proyecto automatiza pruebas para validar los principales flujos de una aplicación web, garantizando la calidad de sus funcionalidades.

---

## Tecnologías Utilizadas 🛠️

- **Editor de código:** Visual Studio Code v1.99  
- **Framework de pruebas:** Cypress 10.9.2  
- **Entorno de ejecución:** Node.js v10.9.2  

---

## Página Web Probada 🌐

- [Parabank](https://parabank.parasoft.com/parabank/index.htm)

---

## Flujos Validados ✅

- **Registro de usuario  - [Register]:** Permite registrar nuevos usuarios en la aplicación.  
- **Inicio de sesión - [Login]:** Autentica a los usuarios registrados en la aplicación.  
- **Transferencia de fondos - [Transfer Funds]:** Simula transferencias entre cuentas de ahorro.  
- **Pago de facturas [Bill Pay]:** Procesa pagos de facturas.

---

## Estructura del Proyecto 📂

![image](https://github.com/user-attachments/assets/10849de9-52f9-45f5-bd53-ca957d7142f8)


---

## Detalle de Archivos 📝

### **e2e/ParaBank**
Contiene archivos de pruebas (`specs`) para los flujos automatizados:
- **register.cy.js:** Pruebas para el registro de usuarios.  
- **login.cy.js:** Pruebas para la autenticación de usuarios.  
- **payment.cy.js:** Pruebas para el pago de facturas.  
- **transfer.cy.js:** Pruebas para transferencias entre cuentas.

### **fixtures**
Almacena datos de prueba reutilizables:
- **pago.json:** Datos para el flujo de pago de facturas.  
- **usuario.json:** Datos para registro y autenticación de usuarios. *(Para cada proceso de registro exitoso, el valor del campo `username` debe ser diferente)*.

### **utils**
Incluye funciones reutilizables para la lógica de pruebas:
- **login.js:** Función para autenticación de usuarios.  
- **pago.js:** Función para procesar pagos de facturas.

---

## Orden sugerido para ejecución de pruebas 📈

   - `register` → `login` → `transfer` → `payment`
