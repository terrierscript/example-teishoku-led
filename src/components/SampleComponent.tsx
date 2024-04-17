"use client"
import { Box } from "@chakra-ui/react"
import { FC } from "react"

const Ramen = () => {
  const text = "ラーメン"
  const lh = 1
  const pos = [
    // [0, 0],
    // [`${1.5 / 2}em`, `${text.length / 2}em`],
    [[0, 0], [lh / 2, text.length / 2], "blue"],
    // [[0, 25], [], "yellow"],
    // [[25, 0], [], "green"],
    // // [[0, text.length / 2], [0, 0], "yellow"],
    // // [1.5 / 2, 0, "green"],
    // // [[1.5 / 2, text.length / 2], [0, 0], "red"],
    [[lh / 2, text.length / 2], [0, 0], "red"]
  ]

  return <Box p={20}>
    <Box position={"relative"}
      fontSize={"6xl"}
      fontWeight={"bold"}
    >
      {pos.map((p, i) => {
        const [start, end, color] = p
        return <Box w={`${text.length / 2}em`}
          lineHeight={`${lh}em`}
          h={`${lh / 2}em`}
          bg={`${color}.100`}
          // top={`${start[0]}em`} left={`${start[1]}em`}
          top={`${start[0]}em`} left={`${start[1]}em`}
          overflow={"hidden"}
          pos="absolute"
        >
          <Box pos="relative">
            <Box
              whiteSpace={"nowrap"}
              // top={`${end[0]}em`} left={`${end[1]}em`}
              top={`${-start[0]}em`} left={`${-start[1]}em`}
              pos="absolute"
              key={i} >
              {text}
            </Box>
          </Box>
        </Box>
      })
      }
    </Box >
  </Box >
}
export const SampleComponent: FC<{}> = () => {
  return <Box>
    < Ramen />
  </Box>
}