import Link from "next/link";
import React, { ComponentPropsWithoutRef } from "react";
import { InternalLink } from "./app/components/InternalLink";
import { ExternalLink } from "./app/components/ExternalLink";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const components = {
  h1: (props: HeadingProps) => <h1 className="pt-12 mb-0" {...props} />,
  h2: (props: HeadingProps) => <h2 className="mt-8 mb-3" {...props} />,
  h3: (props: HeadingProps) => <h3 className="mt-8 mb-3" {...props} />,
  h4: (props: HeadingProps) => <h4 className="" {...props} />,
  p: (props: ParagraphProps) => <p className="leading-snug" {...props} />,
  ol: (props: ListProps) => (
    <ol className="list-decimal pl-5 space-y-2" {...props} />
  ),
  ul: (props: ListProps) => (
    <ul className="list-disc pl-5 space-y-1" {...props} />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => <em className="" {...props} />,
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    if (href?.startsWith("/")) {
      return (
        <InternalLink href={href} {...props}>
          {children}
        </InternalLink>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className="text-blue-500 hover:text-blue-700" {...props}>
          {children}
        </a>
      );
    }
    return (
      <ExternalLink href={href || "#"} {...props}>
        {children}
      </ExternalLink>
    );
  },
  //   code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
  //     const codeHTML = highlight(children as string);
  //     return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  //   },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700"
      {...props}
    />
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
