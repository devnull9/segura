import React from 'react'
import PropTypes from 'prop-types'

import CheckoutWidget from './CheckoutWidget'
import './App.css'

export default class App extends React.PureComponent {
  static propTypes = {
    instalments: PropTypes.array.isRequired,
    sendEvents: PropTypes.func.isRequired,
    getAgreements: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      products: [
        {
          imgUrl: 'https://ak1.ostkcdn.com/images/products/8818677/Samsung-Galaxy-S4-I337-16GB-AT-T-Unlocked-GSM-Android-Cell-Phone-85e3430e-6981-4252-a984-245862302c78_600.jpg',
          imgAlt: 'Imagen de producto',
          header: 'Samsung Galaxy S4 I337 16GB 4G LTE Unlocked GSM Android Cell Phone',
          vendor: 'Samsung',
          capacity: ['16 GB', '32 GB', '64 GB'],
          price: {
            '16 GB': {string: '399,99 €', value: 39999},
            '32 GB': {string: '450,00 €', value: 45000},
            '64 GB': {string: '599,99 €', value: 59999}
          },
          details: `Stay connected either on the phone or the Web with the Galaxy S4 I337 from Samsung. With 16 GB of memory and a 4G connection,
            this phone stores precious photos and video and lets you upload them to a cloud or social network at blinding-fast
            speed. With a 17-hour operating life from one charge, this phone allows you keep in touch even on the go. With
            its built-in photo editor, the Galaxy S4 allows you to edit photos with the touch of a finger, eliminating
            extraneous background items. Usable with most carriers, this smartphone is the perfect companion for work or
            entertainment.`,
          features: [
            'Super AMOLED capacitive touchscreen display with 16M colors',
            'Available on GSM, AT T, T-Mobile and other carriers',
            'Compatible with GSM 850 / 900 / 1800; HSDPA 850 / 1900 / 2100 LTE; 700 MHz className 17 / 1700 / 2100 networks',
            'MicroUSB and USB connectivity',
            'Interfaces with Wi-Fi 802.11 a/b/g/n/ac, dual band and Bluetooth',
            'Wi-Fi hotspot to keep other devices online when a connection is not available',
            'SMS, MMS, email, Push Mail, IM and RSS messaging',
            'Front-facing camera features autofocus, an LED flash, dual video call capability and a sharp 4128 x 3096 pixel picture',
            'Features 16 GB memory and 2 GB RAM',
            'Upgradeable Jelly Bean v4.2.2 to Jelly Bean v4.3 Android OS',
            '17 hours of talk time, 350 hours standby time on one charge',
            'Available in white or black',
            'Model I337',
            'Package includes phone, charger, battery and user manual',
            'Phone is 5.38 inches high x 2.75 inches wide x 0.13 inches deep and weighs a mere 4.59 oz'
          ]
        }
      ],
      active: '16 GB',
      quantity: 1
    }

    this.handleItemSelect = this.handleItemSelect.bind(this)
    this.handleDecreaseQuantity = this.handleDecreaseQuantity.bind(this)
    this.handleIncreaseQuantity = this.handleIncreaseQuantity.bind(this)
  }

  handleItemSelect ({target}) {
    const active = target.innerHTML
    const product = this.state.products[0]
    const price = product.price[active]

    this.props.getAgreements(price.value)

    this.setState({active})
  }

  handleDecreaseQuantity () {
    const {quantity} = this.state

    if (quantity < 2) {
      return
    }

    this.setState({quantity: quantity - 1})
  }

  handleIncreaseQuantity () {
    const {quantity} = this.state

    this.setState({quantity: quantity + 1})
  }

  componentDidMount() {
    const {products, active} = this.state
    const price = products[0].price[active]

    this.props.getAgreements(price.value)
  }

  render () {
    const {instalments, sendEvents} = this.props
    const {products, quantity, active} = this.state
    const product = products[0]

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-4 item-photo'>
            <img src={product.imgUrl} alt={product.imgAlt} style={{maxWidth: '100%'}} />
          </div>

          <div className='col-xs-5' style={{border: '0px solid gray'}}>
            <h3>Samsung Galaxy S4 I337 {active} 4G LTE Unlocked GSM Android Cell Phone</h3>
            <h5 style={{color: '#337ab7'}}>vendido por
              <a>Samsung</a> ·
              <small style={{color: '#337ab7'}}>(5054 ventas)</small>
            </h5>

            <h6 className='title-price'>
              <small>PRECIO OFERTA</small>
            </h6>
            <h3 id='product-price' style={{marginTop: '0px'}}>{product.price[active].string}</h3>

            <div className='section'>
              <h6 className='title-attr' style={{marginTop: '15px'}}>
              <small>COLOR</small>
              </h6>
              <div>
                <div className='attr' style={{width: '25px', background: '#5a5a5a'}} />
                <div className='attr' style={{width: '25px', background: 'white'}} />
              </div>
            </div>

            <div className='section' style={{paddingBottom: '5px'}}>
              <h6 className='title-attr'>
                <small>CAPACIDAD</small>
              </h6>
              <div>
                {
                  product.capacity.map((p, i) => {
                    const style = {
                      cursor: 'pointer',
                      border: '1px solid green',
                      borderRadius: '3px',
                      padding: '3px',
                      margin: '3px'
                    }

                    if (p === active) {
                      style.border = '1px solid orange'
                      style.cursor = 'auto'

                      return <span key={i} style={style}>{p}</span>
                    }

                    return (
                      <span
                        key={i}
                        style={style}
                        onClick={this.handleItemSelect}
                      >
                        {p}
                      </span>
                  )})
                }
              </div>
            </div>
        
            <div className='section' style={{paddingBottom: '20px'}}>
              <h6 className='title-attr'>
                <small>CANTIDAD</small>
              </h6>
              <div>
                <div className='btn-minus' onClick={this.handleDecreaseQuantity}>
                  <span className='glyphicon glyphicon-minus'></span>
                </div>
                <span style={{padding: '0 15px', border: '1px solid gray'}}>{quantity}</span>
                <div className='btn-plus' onClick={this.handleIncreaseQuantity}>
                  <span className='glyphicon glyphicon-plus'></span>
                </div>
              </div>
            </div>

            <div style={{width: '240px', paddingbottom: '20px'}}>
              <button className='btn btn-success'>
                <span
                  style={{marginRight: '20px'}}
                  className='glyphicon glyphicon-shopping-cart' aria-hidden='true'
                /> Agregar al carro
              </button>

              {
                instalments.length ? <CheckoutWidget instalments={instalments} sendEvents={sendEvents} /> : null
              }

              <h6>
                <a>
                  <span
                    className='glyphicon glyphicon-heart-empty'
                    style={{cursor: 'pointer'}}
                  /> Agregar a lista de deseos
                </a>
              </h6>
            </div>
          </div>

          <div className='col-xs-9'>
            <ul className='menu-items'>
              <li className='active'>Detalle del producto</li>
              <li>Garantía</li>
              <li>Vendedor</li>
              <li>Envío</li>
            </ul>
            <div style={{width: '100%', borderTop: '1px solid silver'}}>
              <p style={{padding: '15px'}}>
                <small>
                  {product.details}
                </small>
              </p>
              <small>
                <ul>
                  {
                    product.features.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))
                  }
                </ul>
              </small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}