import { getNews } from "@/app/api/news.api"
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from "@chakra-ui/react";
import { useEffect, useState } from "react"
import { Loading } from "../Loading";

const baseUrl = 'https://www3.nhk.or.jp'

const NewsContainer = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [news, setNews] = useState<{ path: string; title: string }[]>([]);

    const parseHTML = (url: string) => {
        const parser = new DOMParser();
        const parsedHTML = parser.parseFromString(url, 'text/html');
        return parsedHTML;
    }

    const extractHref = (htmlDoc: Document) => {
        const links = htmlDoc.querySelectorAll('a');
        const hrefs = Array.from(links).map(link => link.getAttribute('href'));
        return hrefs;
    }

    const fetchTitle = (hrefs: (string | null)[]) => {
        hrefs.forEach(async path => {
            if (path?.startsWith('/news')) {
                try {
                    const res = await getNews(path);
                    if (res) {
                        const parsed = parseHTML(res.data);
                        const title = parsed.querySelector('title')?.text;
                        if (title) {
                            const el = { path: path, title: title }
                            setNews(prevNews => {
                                const isDuplicate = prevNews.some(prevEl => prevEl.path === el.path);
                                if (!isDuplicate) {
                                    return [...prevNews, el];
                                }
                                return prevNews;
                            });
                        }
                    }
                } catch (e) {
                    console.log(e);
                }
            }
        })

    }

    const fetchDoc = async () => {
        try {
            const res = await getNews();
            if (res) {
                const parsed = parseHTML(res.data);
                const hrefs = extractHref(parsed);
                const uniqHrefs = hrefs.filter(function (x, i, self) {
                    return self.indexOf(x) === i;
                });

                fetchTitle(uniqHrefs)
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchDoc().then(() => {
            setIsLoading(false);
        });
    }, [])

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <TableContainer border='solid 2px black' borderRadius='10px' padding='4px' maxWidth='88%'>
                        <Table size='sm' colorScheme="twitter">
                            <Tbody>
                                {news.map((el) => {
                                    return (
                                        <Tr>
                                            <Td>
                                                <a href={baseUrl + el['path']} >{el['title']}</a>
                                            </Td>
                                        </Tr>
                                    )
                                })}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </>
            )
            }
        </>
    )
}

export default NewsContainer