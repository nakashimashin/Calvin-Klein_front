'use client'
import { ComponentPropsWithRef, RefObject } from 'react';

interface TwitterIntentTweetProps extends ComponentPropsWithRef<"a"> {
    text?: string;
    url?: string;
    hashtags?: string[];
    via?: string;
    related?: string[];
    in_reply_to?: string;
    forwardRef: RefObject<HTMLAnchorElement>
  }


  export const Tweet = 
    (
      { text, url, hashtags, via, related, in_reply_to, forwardRef, ...intrinsicProps }: TwitterIntentTweetProps
    ) => {
      const _url = new URL("https://twitter.com/intent/tweet");
  
      if (text !== undefined) _url.searchParams.set("text", text);
      if (url !== undefined) _url.searchParams.set("url", url);
      if (hashtags !== undefined) _url.searchParams.set("hashtags", hashtags.join(","));
      if (via !== undefined) _url.searchParams.set("via", via);
      if (related !== undefined) _url.searchParams.set("related", related.join(","));
      if (in_reply_to !== undefined) _url.searchParams.set("in_reply_to", in_reply_to);
  
      return (
        <a
          ref={forwardRef}
          href={_url.toString()}
          target="_blank"
          rel="noopener noreferrer"
          {...intrinsicProps}
        />
      );
    };
