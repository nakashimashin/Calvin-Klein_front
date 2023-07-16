'use client'
import Form from "./components/form"
import Header from "./components/header"
import AniMorse from "./components/animorse_code"
import { Scroll } from "./components/scroll_button"
import { Button } from "@chakra-ui/react"
import { Tweet } from "./components/twitter_button"
import { Grid, GridItem } from "@chakra-ui/react"
import NewsContainer from "./components/NewsContainer"
import { useState } from "react"

export default function Home() {
  const [isShown, setIsShown] = useState<boolean>(false);

  return (
    <>
      <Header setIsShown={setIsShown}/>
      <Grid templateColumns="repeat(12, 1fr)">
        <GridItem visibility={isShown ? "visible" : 'hidden'} colSpan={4} className='flex flex-col justify-center items-center'>
          <NewsContainer />
        </GridItem>
        <GridItem colSpan={4} className='flex flex-col justify-center items-center'>
          <AniMorse />
          <Form />
        </GridItem>
        <GridItem visibility={isShown ? "visible" : 'hidden'} colSpan={4} className='flex flex-col justify-center items-center'>
          <a id="aw0" target="_blank" href="https://www.googleadservices.com/pagead/aclk?nis=4&amp;sa=L&amp;ai=CJZTjoN-zZMPaNt__s8IP2ZSWiArfqp-AcIPq6-SFEdP1kpuJOBABIOXxkglgidPfhOAUoAH8nJjxKMgBAqkCew_5IrIsgT6oAwHIA8kEqgTVAU_QRgRqXZ4t0ysiOiL4DXRuaTG54UBxdZYnSDN0oFDg_zSDN6yREq_zUBwxvAmR3tXG5uGxzoRsCiR6hIGHlpMdQLu7GrcPzilFGpSEkEdkVIXT9GieXbyerYIdEu8ruld-zbFpEi5k0Yqu2D8Pa-6HDpcnshltsqRMaF5Nmap48KDovwS2wcaRDQLoC0rt51KmaZPNr-i2ofZvHeW6_pFp9PguzLI4QeyPGYro2VTzw0iVy7mp1GwV0UAC3qmNc6w9vNiOg9X9KdgTz7nKnyUev7ZWNsAEi5viuJsEkAYBoAYCgAf81OjQA4gHAZAHAqgHjs4bqAeT2BuoB-6WsQKoB_6esQKoB6SjsQKoB9XJG6gHpr4bqAeaBqgH89EbqAeW2BuoB6qbsQKoB4OtsQKoB_-esQKoB9-fsQKoB8qpsQKoB-ulsQLYBwHSCBcIABACGBoyAQA6B5_QgICAgARIvf3BOrEJ2w0PgdkJidmACgGYCwHICwG4DAHaDBEKCxCA_PTEt9TCqvEBEgIBA6oNAkpQ2BMM0BUBmBYB-BYBgBcB&amp;ae=1&amp;ase=2&amp;num=1&amp;cid=CAQSQgBpAlJW0gsmJ_iKwBpKx3puuUfppazFhFfCbct40L-oMIzUcr5CSXph7lVDYDvUHFduD96R5MnArTCJ--225FgYfBgB&amp;sig=AOD64_1CWHTtfPr1IAmHlDdmr798IfgNqw&amp;client=ca-pub-1678923010301528&amp;rf=2&amp;nb=17&amp;adurl=https://www.cdgameclub.com/kids-games.html%3Fgclid%3DCj0KCQjwqs6lBhCxARIsAG8YcDiKlN30u4SjsXSlGJ5vpAzN9771z9kwVfZ3xGUjNtI4a6wjdnF-8MUaAqf2EALw_wcB" data-asoch-targets="ad0"><img src="https://tpc.googlesyndication.com/daca_images/simgad/7187711362324176056" border="0" width="970" alt="" class="img_ad" /></a>
        </GridItem>
      </Grid>
      <Scroll />
    </>
  )
}
