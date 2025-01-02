interface ImgLinkProps {
  source: string,
  link: string
}

export function ImgLink({source, link}: ImgLinkProps) {
  return (
  <a href={link}>
    <img 
      src={source}
      width="100%"
      height="300"
      frameBorder="0"
      className="rounded-lg"
      />
  </a>
  );
}