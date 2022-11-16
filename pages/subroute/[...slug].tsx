import { useRouter } from "next/router";

const SubDynamic = () => {
  const router = useRouter();
  const slug = (router.query.slug as string[]) || [];

  return (
    <>
      <h1>Slug: {slug.join("/")}</h1>
    </>
  );
};

export default SubDynamic;
