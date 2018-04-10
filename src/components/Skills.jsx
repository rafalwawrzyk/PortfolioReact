import React from 'react';

import styled from 'styled-components'
import { HeaderTitle } from './About'



/* eslint-disable*/ 



const Container = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    color:#fff;
`



const Skills = (props) => {
    return (
        <Container>
          <HeaderTitle>
                Skills
            </HeaderTitle>
        </Container>
    )
}




export default Skills;