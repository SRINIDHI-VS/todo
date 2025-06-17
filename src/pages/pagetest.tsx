import { Avatars, Button, Card, Spinner, useToast } from "@/templates";

const Pagetest = () => {
  const toastify = useToast();

  const handleClick = () => {
    toastify("success", "hellos");
  };
  return (
    <div className="p-10 text-center">
      <Spinner />
      <Avatars
        source={"https://itechindiablog.files.wordpress.com/2016/10/genric.png"}
        size="md"
      />

      <Button className={""} variant={"primary"} onClick={() => handleClick()}>
        hi
      </Button>

      <Card>
        <p>hello</p>
      </Card>
    </div>
  );
};

export default Pagetest;
