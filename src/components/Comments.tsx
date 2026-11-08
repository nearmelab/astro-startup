import * as React from "react";
import Giscus from "@giscus/react";

const id = "inject-comments";

const Comments = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div id={id}>
      {mounted ? (
        <Giscus
          id={id}
          repo="nearmelab/astro-startup"
          repoId="R_kgDOVnArdw"
          category="Blog"
          categoryId="DIC_kwDOVnArd84DKp5h"
          mapping="pathname"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          lang="en"
          loading="lazy"
        />
//         <script src="https://giscus.app/client.js"
//         data-repo="nearmelab/astro-startup"
//         data-repo-id="R_kgDOVnArdw"
//         data-category="Blog"
//         data-category-id="DIC_kwDOVnArd84DKp5h"
//         data-mapping="pathname"
//         data-strict="0"
//         data-reactions-enabled="1"
//         data-emit-metadata="0"
//         data-input-position="bottom"
//         data-theme="preferred_color_scheme"
//         data-lang="en"
//         crossorigin="anonymous"
//         async>
// </script>
      ) : null}
    </div>
  );
};

export default Comments;