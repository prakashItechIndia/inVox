import { observer } from "mobx-react-lite";
import ActivityListSingleFile from "./clarifychatcomponent";
import SmilyEmoji from "@shared/assets/icons/smilyface.svg";
import Attachpin from "@shared/assets/icons/attachpin.svg";

export const PdfPageDemo = observer(function Profile(props: any) {
  return (
    <>
      <div className="grid grid-cols-[calc(100%_-_39%_-_10px)_39%] gap-2.5 pt-4 pr-6 pb-5 pl-[25px] bg-[#FAFAFA] ">
        <div>Left</div>
        <div>
          {/* verify details also invoice right pdf screen */}
          {props.something ? (
            <div className="h-[40rem] flex flex-col gap-8 px-1">
              {/* Top container (55% of total height) */}

              <section className="basis-[51%] shrink-0 flex flex-col">
                <p className="font-sans not-italic font-semibold text-[1rem] leading-[1.375rem] text-blackTextColor">
                  Labels
                </p>

                {/* Sub-container: column flow */}
                <div className="flex flex-col mt-[1.3125rem] gap-2.5">
                  {/* Component row: 70px gap -> 4.375rem */}
                  {Array(6)
                    .fill("")
                    .map(() => {
                      return (
                        <div className="flex items-center gap-x-[4.375rem] pt-[0.375rem] pr-[0.625rem] pb-[0.375rem] pl-[1.25rem] border border-[#E0E0E0] shadow-custom rounded-md">
                          {/* First element: Vendor (Inter 400, 12/16 -> 0.75rem/1rem) */}
                          <span className="flex items-center font-sans not-italic font-normal text-[0.75rem] leading-[1rem] text-blackTextColor">
                            Vendor
                          </span>

                          {/* Second element: value (Inter 600, 12/16 -> 0.75rem/1rem) */}
                          <span className="flex items-center font-sans not-italic font-semibold text-[0.75rem] leading-[1rem] text-blackTextColor">
                            Ellington Wood Decor
                          </span>
                        </div>
                      );
                    })}
                </div>
              </section>

              {/* Bottom container (45% of total height) */}
              <section className="basis-[49%] shrink-0">
                {/* Second container content */}
                <p className="font-sans not-italic font-semibold text-[1rem] leading-[1.375rem] text-blackTextColor">
                  Tables
                </p>
                <table className="w-full border-collapse mt-[1.3125rem]">
                  <thead className="bg-HighlightLightGray  border-[0.5px] [border-color:var(--Border-line,hsla(0,0%,93%,1))]">
                    <tr>
                      <th className="text-left text-blackDark font-sans font-semibold text-[0.625rem] leading-[1] tracking-[0] pt-[0.3125rem] pr-[0.9375rem] pb-[0.9375rem] pl-[0.625rem]">
                        Description
                      </th>
                      <th className="text-right text-blackDark font-sans font-semibold text-[0.625rem] leading-[1] tracking-[0] pt-[0.3125rem] pr-[0.9375rem] pb-[0.9375rem] pl-[0.625rem]">
                        Quantity
                      </th>
                      <th className="text-right text-blackDark font-sans font-semibold text-[0.625rem] leading-[1] tracking-[0] pt-[0.3125rem] pr-[0.9375rem] pb-[0.9375rem] pl-[0.625rem]">
                        Unit Price ($)
                      </th>
                      <th className="text-right text-blackDark font-sans font-semibold text-[0.625rem] leading-[1] tracking-[0] pt-[0.3125rem] pr-[0.9375rem] pb-[0.9375rem] pl-[0.625rem]">
                        Amount ($)
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-transparent">
                    {Array(2)
                      .fill("")
                      .map(() => {
                        return (
                          <>
                            <tr>
                              {/* Description */}
                              <td className="align-top text-left border-[0.5px] [border-color:var(--Border-line,hsla(0,0%,93%,1))] pt-[0.3125rem] pr-[0.9375rem] pb-[0.9375rem] pl-[0.625rem]">
                                <div className="flex flex-col">
                                  <span className="font-sans font-semibold not-italic text-[0.625rem] leading-[1] tracking-[0] text-blackDark">
                                    Sample service
                                  </span>
                                  <span className="font-sans font-normal not-italic text-[0.5rem] leading-[1] tracking-[0] text-blackDark mt-0.5">
                                    Sample wood decoration service
                                  </span>
                                </div>
                              </td>

                              {/* Quantity */}
                              <td className="text-right border-[0.5px] [border-color:var(--Border-line,hsla(0,0%,93%,1))] pt-[0.3125rem] pr-[0.9375rem] pb-[0.9375rem] pl-[0.625rem]">
                                <span className="font-sans font-semibold not-italic text-[0.625rem] leading-[1] tracking-[0] text-blackDark">
                                  1
                                </span>
                              </td>

                              {/* Unit Price */}
                              <td className="text-right border-[0.5px] [border-color:var(--Border-line,hsla(0,0%,93%,1))] pt-[0.3125rem] pr-[0.9375rem] pb-[0.9375rem] pl-[0.625rem]">
                                <span className="font-sans font-semibold not-italic text-[0.625rem] leading-[1] tracking-[0] text-blackDark">
                                  400.00
                                </span>
                              </td>

                              {/* Amount */}
                              <td className="text-right border-[0.5px] [border-color:var(--Border-line,hsla(0,0%,93%,1))] pt-[0.3125rem] pr-[0.9375rem] pb-[0.9375rem] pl-[0.625rem]">
                                <span className="font-sans font-semibold not-italic text-[0.625rem] leading-[1] tracking-[0] text-blackDark">
                                  400.00
                                </span>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                  </tbody>
                </table>
                <div className="mt-[0.625rem] font-sans not-italic font-normal text-[0.75rem] leading-[1rem] tracking-[0]">
                  Table 2
                </div>
                <div className="mt-[0.625rem] rounded-[0.2rem] border-[0.03125rem] [border-color:hsla(0,0%,93%,1)] overflow-hidden">
                  <table className="w-full border-collapse bg-transparent">
                    <tbody className="bg-transparent">
                      {/* Row 1 */}
                      <tr>
                        <td className="text-left font-sans not-italic font-semibold text-[0.625rem] leading-[1] tracking-[0] text-blackDark py-[0.3125rem] px-[0.625rem]">
                          TOTAL (GBP)
                        </td>
                        <td className="text-right font-sans not-italic font-semibold text-[0.625rem] leading-[1] tracking-[0] text-blackDark py-[0.3125rem] px-[0.625rem] border-l-[0.03125rem] [border-color:hsla(0,0%,93%,1)]">
                          600.00
                        </td>
                      </tr>

                      {/* Row 2 */}
                      <tr>
                        <td className="text-left font-sans not-italic font-semibold text-[0.625rem] leading-[1] tracking-[0] text-blackDark py-[0.3125rem] px-[0.625rem] border-t-[0.03125rem] [border-color:hsla(0,0%,93%,1)]">
                          TOTAL DUE (GBP)
                        </td>
                        <td className="text-right font-sans not-italic font-semibold text-[0.625rem] leading-[1] tracking-[0] text-blackDark py-[0.3125rem] px-[0.625rem] border-l-[0.03125rem] border-t-[0.03125rem] [border-color:hsla(0,0%,93%,1)]">
                          600.00
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          ) : null}
          <div className="h-screen flex flex-col">
            <div
              className="h-[8.27%] shrink-0         
        inline-block align-bottom
        font-inter font-semibold
        text-[1.125rem] leading-[1.5] tracking-normal
        text-blackDark
        py-[0.75rem] pl-[1.5rem]
        border-b border-b-[#E0E0E0]"
            >
              {" "}
              Inactive Client Code
            </div>

            <div className="h-[calc(75%_-_8.27%_-_6%)] min-h-0 overflow-y-auto bg-white">
              {/* middle content (scrolls) */}
              {/* <div className="p-4 space-y-4">
                {[...Array(60)].map((_, i) => (
                  <p key={i}>Row {i + 1}</p>
                ))}
              </div> */}
              <ActivityListSingleFile />
            </div>

            <div className="h-[19.24%] shrink-0 bg-slate-100">
              <div>
                {/* Input-like container */}
                <div className="flex flex-col gap-3 rounded bg-[hsla(0,0%,96%,1)] py-4 px-6 font-inter">
                  {/* Bottom: full-width input area */}
                  <div className="w-full">
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Add your feedback notes or comments here..."
                      className="
              w-full resize-y bg-transparent
              border-0 focus:outline-none focus:ring-0
              font-normal tracking-normal
              text-[1rem] leading-[1.5rem]
              placeholder-[hsla(0,0%,44%,1)]
            "
                    />
                  </div>
                  {/* Top row: two containers, centered, space-between */}
                  <div className="flex items-center justify-between">
                    {/* Left container: two identical icon buttons */}
                    <div className="flex items-center gap-2">
                      {/* Icon button 1 */}
                      <button
                        type="button"
                        className="
                box-border isolate
                flex items-center justify-center
                p-[0.125rem]
                w-6 h-6
                bg-white
                border border-[#D1D1D1]
                rounded
              "
                      >
                        <img
                          src={Attachpin}
                          alt="Attach"
                          className="max-w-full max-h-full object-contain"
                        />
                      </button>

                      {/* Icon button 2 */}
                      <button
                        type="button"
                        className="
                box-border isolate
                flex items-center justify-center
                p-[0.125rem]
                w-6 h-6
                bg-white
                border border-[#D1D1D1]
                rounded
              "
                      >
                        <img
                          src={SmilyEmoji}
                          alt="Emoji"
                          className="max-w-full max-h-full object-contain"
                        />
                      </button>
                    </div>

                    {/* Right container: two chips (Discard, Submit) */}
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        className="
                isolate
                flex items-center justify-center
                py-[0.125rem] px-[0.5rem]
                gap-[0.25rem]
                w-[3.6875rem] h-[1.25rem]
                bg-[#5347CD] text-white
                rounded
                text-[0.75rem] leading-[1rem]
              "
                      >
                        Discard
                      </button>

                      <button
                        type="submit"
                        className="
                isolate
                flex items-center justify-center
                py-[0.125rem] px-[0.5rem]
                gap-[0.25rem]
                w-[3.6875rem] h-[1.25rem]
                bg-[#5347CD] text-white
                rounded
                text-[0.75rem] leading-[1rem]
              "
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
