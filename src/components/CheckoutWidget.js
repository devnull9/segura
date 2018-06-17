import React from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'

import moreinfo1 from './img/moreinfo1.png'
import moreinfo2 from './img/moreinfo2.png'
import moreinfo3 from './img/moreinfo3.png'

export default class CheckoutWidget extends React.PureComponent {
  static propTypes = {
    instalments: PropTypes.array.isRequired,
    sendEvents: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {showModal: false}

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.handleQuotasChange = this.handleQuotasChange.bind(this)
  }

  handleQuotasChange (e) {
    const quotas = Number(e.target.value)

    this.props.sendEvents(quotas)
  }
  
  handleOpenModal () {
    this.setState({showModal: true})
  }

  handleCloseModal () {
    this.setState({showModal: false})
  }

  render () {
    const {instalments} = this.props

    const paymentSteps = [
      {
        p: 'Eliges "Fracciona tu pago" al realizar tu pedido y pagos solo la primera cuota',
        alt: 'Paso Uno',
        img: moreinfo1
      },
      {
        p: 'Recibes tu pedido',
        alt: 'Paso Dos',
        img: moreinfo2
      },
      {
        p: 'El resto de pagos se cargaron automaticamente a tu tarjeta',
        alt: 'Paso Tres',
        img: moreinfo3
      }
    ]

    const instalmentFee = instalments[0].instalment_fee.string

    return (
      <div style={{width: '300px', marginTop: '20px', border: '1px solid silver'}}>
        <p style={{padding: '0px 15px'}}>
          <span>Pagalo en</span>
          <span style={{float: 'right', cursor: 'pointer'}}>
            <a onClick={this.handleOpenModal}>Mas Info</a>
            
            <Modal
              ariaHideApp={false}
              isOpen={this.state.showModal}
              onRequestClose={this.handleCloseModal}
              style={{content: {width: '370px', height: '500px', marginLeft: '600px'}}}
            >
              <header style={{paddingBottom: '15px'}}>
                <span style={{float: 'left'}}>Fracciona tu pago</span>
                <span style={{float: 'right'}}>SeQura</span>
              </header>

              <hr />
              
              <main>
                <div style={{marginBottom: '15px'}}>
                  {
                    paymentSteps.map((item, i) => (
                      <div key={i} style={{marginBottom: '10px'}}>
                        <p style={{display: 'inline-block', verticalAlign: 'middle', width: '60%', marginRight: '30px'}}>
                          {i + 1}. {item.p}
                        </p>
                        <img style={{border: '1px solid #F2F3F4', display: 'inline-block', verticalAlign: 'middle'}} src={item.img} alt={item.alt} />
                      </div>
                    ))
                  }
                </div>
              </main>

              <footer style={{marginTop: '50px'}}>
                <p>¡Asi de simple!</p>

                <p>
                  Ademas, en el importo mostrado ya se incluye la cuota unica mensual de {instalmentFee}, por lo que no tendras ninguna sorpresa.
                </p>
              </footer>
            </Modal>

          </span>
        </p>
        <select
          style={{width: '90%', marginLeft: '15px', marginBottom: '15px'}}
          onChange={this.handleQuotasChange}
        >
          {
            instalments.map((p, i) => (
              <option
                key={i}
                value={p.instalment_count}
              >
                {p.instalment_count} cuotas de {p.instalment_total.string}/mes
              </option>
            ))
          }
          </select>
      </div>
    )
  }
}
