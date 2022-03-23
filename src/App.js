import { Card, CardBody, CardImg, CardTitle, Carousel, CarouselItem, Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'reactstrap';
import NumberFormat from 'react-number-format';
import './App.css';

import Button from './components/Button'
import { MenuFoldOutlined, CloseOutlined } from '@ant-design/icons'
import { ReactComponent as Dochase } from './assets/Dochase.svg'
import { ReactComponent as Open } from './assets/open-quote.svg';
import { ReactComponent as Close } from './assets/close-quote.svg';
import { ReactComponent as Facebook } from './assets/facebook.svg';
import { ReactComponent as Linkedin } from './assets/linkedin.svg';
import { ReactComponent as Instagram } from './assets/instagram.svg';
import { ReactComponent as Twitter } from './assets/twitter.svg';
import branch from './assets/clients/branch.png';
import chattered from './assets/clients/chattered.png';
import union from './assets/clients/union.png';
import fcmb from './assets/clients/fcmb.png';
import fxtm from './assets/clients/fxtm.png';
import pwc from './assets/clients/pwc.png';
import uba from './assets/clients/uba.png';
import viablex from './assets/clients/viablex.png';
import background from './assets/backgroud.png'
import progress from './assets/progress.png'
import lady from './assets/lady.png'
import email from './assets/email.png'
import robot from './assets/robot.png'
import accordionc from './assets/accordionc.png'
import accordionf from './assets/accordionf.png'
import accordiona from './assets/accordiona.png'
import accordiond from './assets/accordiond.png'
import accordione from './assets/accordione.png'
import accordionb from './assets/accordionb.png'
import accordiong from './assets/accordiong.png'
import { useEffect, useState } from 'react';


function App() {
  const [clicks, setClicks] = useState(36000)
  const [reach, setReach] = useState(7200000)
  const [price, setPrice] = useState(5000);
  const [index, setIndex] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen)


  useEffect(() => {
    document.documentElement.style.setProperty('--range', (price/30000) * 100 + '%');

    setClicks(Math.round((price/0.6)*1000*0.005))
    setReach(Math.round((price/0.6)*1000))

    if (price < 30000) {
      document.documentElement.style.setProperty('--trackball', '#fff')
    } else {
      document.documentElement.style.setProperty('--trackball', '#EF283B')
    }
  },[price])

  const next = () => setIndex((prev) => {
    if (prev === 0) return 1
    return 0
  });

  const previous = () => setIndex((prev) => {
    if (prev === 0) return 1
    return 0
  });

  const onChange = (e) => {
    setPrice(e.target.value)
  }
 
  return (
    <div className="App">
      <Container fluid>
        <div className='header container'>
          <Dochase />
          <div className={`my-nav ${showNav ? 'show' : ''}`}>
            <ul className='nav-bar'>
              <li className='nav-items'><a href='/programatic-solutions.html'>Solutions</a></li>
              <li className='nav-items'><a href='/advertiser.html'>How it works</a></li>
              <li className='nav-items'><a href='/publisher.html'>Publishers</a></li>
              <li className='nav-items'><a href='/about-us.html'>Company</a></li>
            </ul>
            <div>
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                  Signup
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem><a href='https://dashboard.dochase.com/register' target='_blank'>Advertiser Signup</a></DropdownItem>
                  <DropdownItem><a href='https://monetize.dochase.com/#apply' target='_blank'>Publisher Signup</a></DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <a href='https://dashboard.dochase.com/index.aspx'><Button text='Login' /></a>
            </div>
          </div>
          <div className='hamburger'>
            { 
              showNav ? <CloseOutlined style={{fontSize: '35px'}} onClick={()=>setShowNav(false)} /> 
              : <MenuFoldOutlined style={{fontSize: '35px'}} onClick={()=>setShowNav(true)} />
            }
          </div>
        </div>
        <section className='first container text-center'>
          <h1>Grow your business</h1>
          <p>Programmatic advertising that increases your brand’s awareness, reach, engagement and bottom lines. Full funnel campaign done with you or for you.</p>
        </section>
        <section className='second container-fluid'>
          <img src={background} alt='background' />
        </section>
        <section className='container third text-center'>
          <h1>Case study</h1>
          <p>We always deliver on our goals and thats why we are trusted by several brands 
across different sectors to deliver on their business needs</p>
          <div className='carousel-parent'>
          <Carousel 
            activeIndex={index} 
            next={next}
            previous={previous}
          >
            <CarouselItem>
              <Row className='carousel-div'>
                <div className='col-6' px-3>
                  <Card>
                    <CardImg top src={accordione} alt='picture' />
                    <CardBody>
                      <CardTitle>Finance</CardTitle>
                      <p>See some case studies of our finance client</p>
                      <a href='/case-studies.html'><Button text='Read more' /></a>
                    </CardBody>   
                  </Card>
                </div>
                <div className='col-6' px-3>
                  <Card>
                    <CardImg top src={accordiond} alt='picture' />
                    <CardBody>
                    <CardTitle>Sports Betting</CardTitle>
                      <p>See some case studies of our sports betting client</p>
                      <a href='/case-studies.html'><Button text='Read more' /></a>
                    </CardBody>
                  </Card>
                </div>
              </Row>
              </CarouselItem>
              <CarouselItem>
              <Row className='carousel-div'>
                <div className='col-6' px-3>
                  <Card>
                    <CardImg top src={accordiong} alt='picture' />
                    <CardBody>
                      <CardTitle>Real Estate</CardTitle>
                      <p>See some case studies of our real estate client</p>
                      <a href='/case-studies.html'><Button text='Read more' /></a>
                    </CardBody>
                  </Card>
                </div>
                <div className='col-6' px-3>
                  <Card>
                    <CardImg top src={accordionb} alt='picture' />
                    <CardBody>
                      <CardTitle>Sexual Health</CardTitle>
                      <p>See some case studies of our sexual health client</p>
                      <a href='/case-studies.html'><Button text='Read more' /></a>
                    </CardBody>
                  </Card>
                </div>
              </Row>
              
            </CarouselItem>
          </Carousel>
          <div className='carousel-control prev' onClick={previous}>
            {'<'}
          </div>
          <div className='carousel-control next' onClick={next}>
            {'>'}
          </div>
          </div>
        </section>
        <section className='container fourth text-center'>
          <Open />
          <h2 className='px-3'>Programmatic Advertising that get you results</h2>
          <Close />
        </section>
        <section className='container fifth'>
          <Row>
            <Col md='6'>
              <h3>Performance <br /> growth marketing</h3>
              <p className='details'>
              Performance is what we do best at Dochase. 
              <br /><br />
              We build a full-funnel advertising strategy running separate campaigns for your target audience at different stages of the customer journey which will drive your target audience right to the conversion stage without extra effort.
              </p>
              <a href=''><Button text='Speak to our Ad Strategists' /></a>
            </Col>
            <Col md='6'>
              <img src={progress} alt='progress' />
            </Col>
          </Row>
          <Row className='reversed'>
            <Col md='6'>
              <h3>Programmatic <br /> media buying</h3>
              <p className='details'>
              Our programmatic platform has the best ad targeting capabilities to ensure clients reach the right audience, in the right place, at the right time. As part of your journey with us, you get in-depth easy to understand reports and analysis that takes your brand to where you want it to be.
              </p>
              <a href='/programmatic-solutions.html'><Button text='Learn more' /></a>
            </Col>
            <Col md='6'>
              <img src={lady} alt='lady' />
            </Col>
          </Row>
          <Row>
            <Col md='6' className='margin-top'>
              <h3>Messaging SMS<br /> Email OTP</h3>
              <p className='details'>
              We enhance customer loyalty and retention by guaranteeing the delivery of messages across channels like SMS, emails and WhatsApp. Retrieve real-time reports for every message you send out.
              </p>
              <a href='/programmatic-solutions.html#sms-tagging'><Button text='Learn more' /></a>
            </Col>
            <Col md='6'>
              <img src={email} alt='email' />
            </Col>
          </Row>
          <Row className='reversed'>
            <Col md='6'>
              <h3>AI Chatbot</h3>
              <p className='details'>
              Automate communication to improve customer engagement and retention. <br />
              Our chatbots are set up to interact with your customers as though they are interacting with your brand representatives.
              </p>
              <a href='/dochase-chatbot.html'><Button text='Request for a demo' /></a>
            </Col>
            <Col md='6'>
              <img src={robot} alt='robot' />
            </Col>
          </Row>
        </section>
        <section className='container sixth text-center'>
          <h2 className='mb-3'>Advertise now and pay later</h2>
          <Row className='my-3'>
            <Col md='4'>
              <Card>
                <CardImg top width='100%' src={accordionc} alt='business' />
                <CardBody>
                  Accelerate your Business with advertising
                </CardBody>
              </Card>
            </Col>
            <Col md='4'>
              <Card>
                <CardImg top width='100%' src={accordiona} alt='perfect' />
                <CardBody>
                  Find the perfect loan for your business to scale up
                </CardBody>
              </Card>
            </Col>
            <Col md='4'>
              <Card>
                <CardImg top width='100%' src={accordionf} alt='scale' />
                <CardBody>
                  Scale up with advertising
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Button text='Apply here' />
        </section>
        <section className='container seventh text-center'>
          <h2>Our Clients</h2>
          <div className='carousel-parent'>
          <Carousel 
            activeIndex={index} 
            next={next}
            previous={previous}
          >
            <CarouselItem>
              <div className='carousel-div client'>
                <img src={union} alt='logo' /><img src={viablex} alt='logo' /> <img src={branch} alt='logo' /> <img src={chattered} alt='logo' /> 
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='carousel-div client'>
                <img src={fcmb} alt='logo' /> <img src={fxtm} alt='logo' /> <img src={uba} alt='logo' /> <img src={pwc} alt='logo' />
              </div>
            </CarouselItem>
          </Carousel>
          <div className='carousel-control prev' onClick={previous}>
            {'<'}
          </div>
          <div className='carousel-control next' onClick={next}>
            {'>'}
          </div>
          </div>
        </section>
        <section className='container eight text-center'>
          <h2>What's your budget?</h2>
          <div>
            <p>Budget planner</p>
            <p>Reach: <NumberFormat displayType='text' value={reach} thousandSeparator={true} /></p>
            <p>Clicks: <NumberFormat displayType='text' value={clicks} thousandSeparator={true} /></p>
          </div>
          <input type='range' min='0' max='30000' value={price} onChange={onChange} step='100' />
          <label className='budget'>$<NumberFormat displayType='text' value={price} thousandSeparator={true} /></label>
        </section>
        <section className='container form text-center'>
            <Button text='Contact Us' onClick={()=>setShowContact(!showContact)} />
            {
              showContact && <div>
                <form method='POST' action='https://formspree.io/f/mnqwzjnj'>
                  <div className='app-form-group'>
                    <label>Name</label>
                    <input type='text' name='name' />
                  </div>
                  <div className='app-form-group flex'>
                    <div className='app-form-group'>
                      <label>Email Address</label>
                      <input type='email' name='email' />
                    </div>
                    <div className='app-form-group'>
                      <label>Phone No.</label>
                      <input type='tel' name='phone' />
                    </div>
                  </div>
                  <div className='app-form-group'>
                    <label>Enter Your Message</label>
                    <textarea name='message'></textarea>
                  </div>
                  <Button text='Submit' />
                </form>
              </div>
            }
        </section>
        <div className='container'>
          <p className='follow'>Follow us <Facebook /> <Instagram /> <Linkedin /> <Twitter /> </p>
        </div>
        <footer className='container'>
          <div className='footer-container'>
            <div className='footer-inner wide'>
              <h5>Dochase Adx</h5>
              <p>Emerging market leader in business automation, chatbots, sentiment analysis and rich media</p>
            </div>
            <div className='footer-inner'>
            <p>SOLUTIONS</p>
              <ul>
                <li><a href=''>Click to WhatsApp</a></li>
                <li><a href=''>Click to Call</a></li>
                <li><a href='/programmatic-solutions.html#click-to-ussd'>USSD</a></li>
              </ul>
            </div>
            <div className='footer-inner'>
            <p>PRODUCTS</p>
              <ul>
                <li><a href='https://dochase.com/dochase-chatbot.html'>Chatbot</a></li>
                <li><a href='/rich-media.html'>Rich Media</a></li>
                <li><a href='/sentimental-analysis.html'>Sentiment Analysis</a></li>
                <li><a href='retain.dochase.co'>Retain</a></li>
              </ul> 
            </div>
            <div className='footer-inner'>
            <p>TECHNICAL INFO</p>
              <ul>
                <li><a href='/privacy-policy-2.html'>Privacy policy</a></li>
                <li><a href='/tos.html'>Terms and Conditions</a></li>
                <li><a href='adquality.html'>Ad Quality</a></li>
              </ul>
            </div>
            <div className='footer-inner d-none'></div>
            <div className='footer-inner'>
            <p>RESOURCES</p>
              <ul>
                <li><a href='https://dochase.com/case-studies.html'>Case Studies</a></li>
                <li><a href='https://blog.dochase.come' target='_blank'>Blog</a></li>
                <li><a href='/about-us.html'>About Us</a></li>
                <li><a href='#clientele'>Our Clientele</a></li>
              </ul>
            </div>
            <div className='footer-inner'>
            <p>CONTACT</p>
              <p>Nigeria</p>
              <p>
                <span>Address: </span>
                <span>361, Herbert Macaulay Way, Yaba Lagos-Nigeria.</span>
              </p>
              <p>
                <span>Phone: </span>
                <span>+2347054000728, +2348034410381</span>
              </p>
              <p>
                <span>Email: </span>
                <span>info@dochase.com</span>
              </p>
              
            </div>
            <div className='footer-inner'>
              <p></p>
              <p></p>
              <p>United States</p>
              <p>
                <span>Address: </span>
                <span>220 Davidson Avenue, Somerset NJ 08873</span>
              </p>
              <p>
                <span>Phone: </span>
                <span>+1 732 788 357</span>
              </p>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
}

export default App;
