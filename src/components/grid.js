import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import image1 from '../images/1.jpg'
import image2 from '../images/2.jpg'
import image3 from '../images/3.jpg'
import image4 from '../images/4.jpg'
import image5 from '../images/5.jpg'
import image6 from '../images/6.jpg'

const Grids = ({ text }) => {
  return (
    <Container>
      <GridContainer>
        <Grid>
          <Image src={image1} />
          <Text>{text}</Text> {/* <Text></Text> == <em></em> */}
        </Grid>
        <Grid>
          <Image src={image2} />
          <Text>{text}</Text> {/* <Text></Text> == <em></em> */}
        </Grid>
      </GridContainer>
      <GridContainer>
        <Grid>
          <Image src={image3} />
          <Text>{text}</Text> {/* <Text></Text> == <em></em> */}
        </Grid>
        <Grid>
          <Image src={image4} />
          <Text>{text}</Text> {/* <Text></Text> == <em></em> */}
        </Grid>
      </GridContainer>
      <GridContainer>
        <Grid>
          <Image src={image5} />
          <Text>{text}</Text> {/* <Text></Text> == <em></em> */}
        </Grid>
        <Grid>
          <Image src={image6} />
          <Text>{text}</Text> {/* <Text></Text> == <em></em> */}
        </Grid>
      </GridContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0px 1rem;
  padding: 1.5rem 10% 0px;
`

const GridContainer = styled.div`
  grid-template-columns: repeat(1, 300px);
  grid-column-gap: 1rem;
  &:nth-child(2) {
    padding-top: 2rem;
    grid-row-gap: 2rem;
  }
`

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 600px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  &:nth-child(2) {
    margin-top: 1rem;
  }
`

const Image = styled.img`
  max-width: 100%;
  max-height: 350px;
`

const Text = styled.em`
  font-size: clamp(0.6rem, 1vw, 1.5rem);
  color: #767676;
  margin: 1rem 0.8rem 1.3rem;
`

Grids.propTypes = {
  text: PropTypes.string
}

export default Grids
