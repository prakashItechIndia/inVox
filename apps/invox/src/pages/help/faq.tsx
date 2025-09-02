import { useLanguageTranslation } from "shared/src/hooks/ui/useLanguageTranslation";

const faqItems = [
  {
    question: 'What does it mean if my parcel has a status of “Delinquent”?',
    answer: [
      {
        ans: 'This status means the parcel has unpaid property taxes.',
        type: 'text',
      },
      { ans: "You'll see supporting details such as:", type: 'text' },
      {
        ans: [
          'Last Checked Date: When Invox last verified the status',
          'Unpaid Amount:  How much is due including interest and penalty calculated through a certain date',
          'Sold: An indicator if the taxes were sold to a third party',
          'Next Due Date: The upcoming installment due',
        ],
        type: 'list',
      },
    ],
  },
  {
    question:
      'What does it mean if my parcel has a status of “Delinquent Updated”?',
    answer: [
      {
        ans: 'This means a previously delinquent parcel has been marked paid by the lender and is now under re-verification by Invox.',
        type: 'text',
      },
      {
        ans: "It's a key part of closing the loop and maintaining accuracy.",
        type: 'text',
      },
    ],
  },
  {
    question: 'What does it mean if my parcel has a status of “Exception”?',
    answer: [
      {
        ans: 'An Exception occurs when we can’t confidently match your loan to tax records using Borrower Name, Property Address, Parcel Number. An Exception status is given when Invox is only able match on 0 or 1 of the matching criteria.',
        type: 'text',
      },
      {
        ans: 'You’ll see the specific mismatch highlighted in red. From there, you can:',
        type: 'text',
      },
      {
        ans: [
          'Choose to accept tax authority data',
          'Or manually correct the information',
        ],
        type: 'list',
      },
    ],
  },
  {
    question:
      'What does it mean if my parcel has a status of “Exception” Updated”?',
    answer: [
      {
        ans: 'This means you’ve made changes to a record flagged as an Exception. Invox has now been alerted to revalidate the parcel.',
        type: 'text',
      },
      {
        ans: 'It ensures edge cases don’t fall through the cracks and promotes cleaner research outcomes.',
        type: 'text',
      },
    ],
  },
  {
    question: 'What does it mean if my parcel has a status of “Not Searched”?',
    answer: [
      {
        ans: 'This status means Invox hasn’t yet performed a search on this parcel. It typically applies to new loan submissions or parcels that were deferred in the last research cycle. It keeps them clearly visible until the next tax search cycle.',
        type: 'text',
      },
    ],
  },
  {
    question: 'What does it mean if my parcel has a status of “Paid”?',
    answer: [
      {
        ans: 'Just as it sounds, this means all taxes are current for this parcel.Invox has verified the payment through the tax authority.',
        type: 'text',
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
    item.question.toLowerCase().includes(debouncedSearch.toLowerCase()),
  );

  return (
    <div className="bg-grayMediumColor flex flex-col items-center  pr-4">
      <div className="text-blueDark bg-grayMediumColor sticky top-0 z-10 w-full max-w-[600px] pb-4 pt-10 text-start text-base font-bold">
        {t('FAQ.TITLE')}
      </div>
      {filteredFaqs && filteredFaqs.length ? (
        filteredFaqs.map((e, index) => (
          <div
            className="mb-4 flex max-w-[600px] flex-col gap-1 rounded-[20px] bg-white p-4"
            key={index}>
            <h2 className="text-blueDark px-4 text-base font-bold">
              {e?.question}
            </h2>
            {e.answer.map((el) => (
              <div className="text-blueDark px-4 pb-3 text-sm font-normal">
                {el.type === 'list' ? (
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
