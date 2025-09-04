import { useLanguageTranslation } from "shared/src/hooks/ui/useLanguageTranslation";

const faqItems = [
  {
    question:
      "What is the purpose of the AI-based invoice processing software?",
    answer: [
      {
        ans: "The purpose of this document is to outline the business requirements for the AI-based invoice processing software developed by iTech.",
        type: "text",
      },
      {
        ans: "This Software-as-a-Service (SaaS) solution aims to:",
        type: "text",
      },
      {
        ans: [
          "Automate invoice data extraction",
          "Deliver structured outputs in formats like JSON or XML",
          "Send outputs to customer-specified endpoints such as email, FTP, or webhook",
        ],
        type: "list",
      },
    ],
  },
];

type Props = {
  debouncedSearch: string;
};
export const FAQ = (props: Props) => {
  const { debouncedSearch } = props;
  const { t } = useLanguageTranslation();

  const filteredFaqs = faqItems.filter((item) =>
    item.question.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div className="bg-grayMediumColor flex flex-col items-center  pr-4">
      <div className="text-blueDark bg-grayMediumColor sticky top-0 z-10 w-full max-w-[600px] pb-4 pt-10 text-start text-base font-bold">
        {t("FAQ.TITLE")}
      </div>
      {filteredFaqs && filteredFaqs.length ? (
        filteredFaqs.map((e, index) => (
          <div
            className="mb-4 flex max-w-[600px] flex-col gap-1 rounded-[20px] bg-white p-4"
            key={index}
          >
            <h2 className="text-blueDark px-4 text-base font-bold">
              {e?.question}
            </h2>
            {e.answer.map((el) => (
              <div className="text-blueDark px-4 pb-3 text-sm font-normal">
                {el.type === "list" ? (
                  <ul className="pl-8">
                    {(el.ans as string[]).map((item, idx) => (
                      <li key={idx} className="list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  el?.ans
                )}
              </div>
            ))}
          </div>
        ))
      ) : (
        <div className="text-blueDark px-4 py-8 text-center text-base font-semibold">
          Search not found
        </div>
      )}
    </div>
  );
};
