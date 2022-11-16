import { useRouter } from "next/router";

const SubDynamic = () => {
  const router = useRouter();
  const slug = (router.query.slug as string[]) || [];

  return (
    <>
      <h1>Slug: {slug.join("/")}</h1>
      <pre>
        <code>{JSON.stringify(router, null, 2)}</code>
      </pre>
    </>
  );
};

export default SubDynamic;
