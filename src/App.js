import { Card, CardBody, CardImg, CardTitle, Carousel, CarouselItem, Col, Container, Row } from 'reactstrap';
import NumberFormat from 'react-number-format';
import './App.css';

import Button from './components/Button'
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
          <div className='my-nav'>
            <ul className='nav-bar'>
              <li className='nav-items'>Solutions</li>
              <li className='nav-items'>How it works</li>
              <li className='nav-items'>Publishers</li>
              <li className='nav-items'>Company</li>
            </ul>
            <div>
              <Button type='secondary' text='Sign up' />
              <Button text='Login' />
            </div>
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
                <Col sm='6' px-3>
                  <Card>
                    <CardImg top src={accordione} alt='picture' />
                    <CardBody>
                      <CardTitle>Finance</CardTitle>
                      <p>See some case studies of our finance client</p>
                      <Button text='Read more' />
                    </CardBody>   
                  </Card>
                </Col>
                <Col sm='6' px-3>
                  <Card>
                    <CardImg top src={accordiond} alt='picture' />
                    <CardBody>
                    <CardTitle>Sports Betting</CardTitle>
                      <p>See some case studies of our sports betting client</p>
                      <Button text='Read more' />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </CarouselItem>
            <CarouselItem>
              <Row className='carousel-div'>
                <Col sm='6' px-3>
                  <Card>
                    <CardImg top src={accordiong} alt='picture' />
                    <CardBody>
                      <CardTitle>Real Estate</CardTitle>
                      <p>See some case studies of our real estate client</p>
                      <Button text='Read more' />
                    </CardBody>
                  </Card>
                </Col>
                <Col sm='6' px-3>
                  <Card>
                    <CardImg top src={accordionb} alt='picture' />
                    <CardBody>
                      <CardTitle>Sexual Health</CardTitle>
                      <p>See some case studies of our sexual health client</p>
                      <Button text='Read more' />
                    </CardBody>
                  </Card>
                </Col>
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
              <Button text='Speak to our Ad Strategists' />
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
              <Button text='Learn more' />
            </Col>
            <Col md='6'>
              <img src={lady} alt='lady' />
            </Col>
          </Row>
          <Row>
            <Col md='6'>
              <h3>Messaging SMS<br /> Email OTP</h3>
              <p className='details'>
              We enhance customer loyalty and retention by guaranteeing the delivery of messages across channels like SMS, emails and WhatsApp. Retrieve real-time reports for every message you send out.
              </p>
              <Button text='Learn more' />
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
              <Button text='Request for a demo' />
            </Col>
            <Col md='6'>
              <img src={robot} alt='robot' />
            </Col>
          </Row>
        </section>
        <section className='container sixth text-center'>
          <h2 className='my-3'>Advertise now and pay later</h2>
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
        <div className='container'>
          <p className='follow'>Follow us <Facebook /> <Instagram /> <Linkedin /> <Twitter /> </p>
        </div>
        <footer className='container'>
          <Row>
            <Col md='3'>
              <h5>Dochase Adx</h5>
              <p>Emerging market leader in business automation, chatbots, sentiment analysis and rich media</p>
            </Col>
            <Col md='3'>
              <p>SOLUTIONS</p>
              <ul>
                <li>Click to WhatsApp</li>
                <li>Click to Call</li>
                <li>USSD</li>
              </ul>
            </Col>
            <Col md='3'>
              <p>TECHNICAL INFO</p>
              <ul>
                <li>Privacy policy</li>
                <li>Terms and Conditions</li>
                <li>Ad Quality</li>
              </ul>
            </Col>
            <Col md='3'>
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
            </Col>
          </Row>
          <Row>
            <Col md='3'></Col>
            <Col md='3'>
              <p>PRODUCTS</p>
              <ul>
                <li>Chatbot</li>
                <li>Rich Media</li>
                <li>Sentiment Analysis</li>
                <li>Retain</li>
              </ul>
            </Col>
            <Col md='3'>
              <p>RESOURCES</p>
              <ul>
                <li>Case Studies</li>
                <li>Blog</li>
                <li>About Us</li>
                <li>Our Clientele</li>
              </ul>
            </Col>
            <Col md='3'>
              <p>United States</p>
              <p>
                <span>Address: </span>
                <span>220 Davidson Avenue, Somerset NJ 08873</span>
              </p>
              <p>
                <span>Phone: </span>
                <span>+1 732 788 357</span>
              </p>
            </Col>
          </Row>
        </footer>
      </Container>
    </div>
  );
}

export default App;
