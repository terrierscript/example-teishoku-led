import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import { SampleComponent } from '../components/SampleComponent'
import { SampleComponent2 } from '../components/cmp2/SampleComponent'

export default function Home() {
  return (
    <Box>
      <Container>
        {/* <SampleComponent /> */}
        <SampleComponent2 />
      </Container>
    </Box>
  )
}
