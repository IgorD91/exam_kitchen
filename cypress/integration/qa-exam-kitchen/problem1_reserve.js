import ReservationPage from '../../support/pageObjects/reservation_page'

describe('Check "Make Reservation" page', () => {
    before(function () {
        cy.fixture('exam_data').then(function (data) {
            this.data = data
        })
    })
    it('Verify that populated data are stored in local storage', function () {
        const reservationPage = new ReservationPage()
        cy.visit('/reserve');
        reservationPage.getNameField().type(this.data.name)
        reservationPage.getEmailField().type(this.data.email)
        reservationPage.getPhoneField().type(this.data.phone)
        reservationPage.getDatePicker().type(this.data.date)
        reservationPage.getTimePicker().type(this.data.time)
        reservationPage.getPersonDropdown().select('2')
        reservationPage.getParkingSwitch().click({ force: true })
        reservationPage.getMakeReservationButton().click()
            .then(() => {
                expect(localStorage.getItem('name')).to.equal(this.data.name)
                expect(localStorage.getItem('email')).to.equal(this.data.email)
                expect(localStorage.getItem('phone')).to.equal(this.data.phone)
                expect(localStorage.getItem('date')).to.equal(this.data.date)
                expect(localStorage.getItem('time')).to.equal(this.data.time)
                expect(localStorage.getItem('person')).to.equal('2')
                expect(localStorage.getItem('parking')).to.equal('on')
            })
    })
})