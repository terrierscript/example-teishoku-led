"use client"
import { Box } from "@chakra-ui/react"
import { FC } from "react"
import "./sample.css"
const Ramen = () => {
  const text = "営業中"
  const lh = 1
  const pos = [
    "blue", "yellow", "green", "red"
  ]
  //   // [0, 0],
  //   // [`${1.5 / 2}em`, `${text.length / 2}em`],
  //   [[0, 0], [lh / 2, text.length / 2], "blue",],
  //   // [[0, 25], [], "yellow"],
  //   // [[25, 0], [], "green"],
  //   [[0, text.length / 2], [0, 0], "yellow"],
  //   // [[1.5 / 2, 0], [0, 0], "green"],
  //   [[lh / 2, 0], [0, 0], "green"],
  //   [[lh / 2, text.length / 2], [0, 0], "red"]
  // ]

  return <Box p={20}>
    <Box position={"relative"}
      fontSize={"6xl"}
      fontWeight={"bold"}
    >
      {pos.map((p, i) => {
        const color = p
        return <Box
          className={`target t-${color}`}
          key={i} >
          {/* {text} */}
        </Box>
      })
      }
    </Box >
  </Box >
}
export const SampleComponent2: FC<{}> = () => {
  return <Box>
    < Ramen />
  </Box>
}