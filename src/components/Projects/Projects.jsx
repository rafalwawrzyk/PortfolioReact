import React from 'react'

import styled from 'styled-components'
import { HeaderTitle } from '../About/About'

/* eslint-disable*/ 



const Container = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    color:#fff;
`




const Projects = (props) => {
    return(
        <Container>
            <HeaderTitle>
                Work
            </HeaderTitle>
        </Container>
    )
}




export default Projects;