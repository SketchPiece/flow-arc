import Button from "./ui/Button";

interface NotFoundSectionProps {
  lang: 'en' | 'uk';
}

export function NotFoundSection({lang}: NotFoundSectionProps) {
  const handleReturnHome = () => {
    window.location.href = "/";
  };

  const isUkrainian = lang === 'uk';

  return (
    <>
      <h1 className="text-center text-3xl font-semibold">
        {isUkrainian ? "Упс, тут нічого немає!" : "Oopsie, there's nothing here!"}
      </h1>
      <Button className="mt-9" onClick={handleReturnHome}>
        {isUkrainian ? "Повернутися до головної" : "Return to the main page"}</Button>
    </>
  );
}