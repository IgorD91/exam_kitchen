class ReservationPage {

    getNameField() {
        return cy.get('#name')
    }
    getEmailField() {
        return cy.get('#email')
    }
    getPhoneField() {
        return cy.get('#phone')
    }
    getDatePicker() {
        return cy.get('#date')
    }
    getTimePicker() {
        return cy.get('#time')
    }
    getPersonDropdown() {
        return cy.get('#persons')
    }
    getParkingSwitch() {
        return cy.get('#switch-1')
    }
    getMakeReservationButton() {
        return cy.get('#submitForm')

    }
}
export default ReservationPage;