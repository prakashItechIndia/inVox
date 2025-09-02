export const styles = {
  MainContainer: 'flex min-h-screen w-full overflow-y-auto overflow-x-hidden',
  cardContainer:
    'bg-blueDark border-blueDark flex max-h-full w-full flex-col justify-between rounded-none p-4 text-white md:w-[466px]',
  cardHeader: 'gap-10 p-0 text-center',
  cardTitle: 'text-[34px] font-semibold',
  cardSubtitle: 'text-xs font-normal',
  cardContent: 'p-4',
  cardFooter: 'mt-10 flex flex-col justify-between p-4 gap-4',
  submitButton: 'bg-btnColor h-[60px] w-full text-white',
  bannerContainer: 'flex-1 relative min-h-screen sticky top-0',
  bannerImage: 'absolute h-full w-full object-cover objext-center inset-0',
  bannerText:
    'absolute flex h-full w-full flex-col justify-center gap-4 pl-20 text-white',
  bannerTextLight: 'text-7xl font-light',
  bannerTextBold: 'text-7xl font-bold',
  backButton: 'text-sm hover:underline',
  termsAndConditions: 'flex w-full justify-between text-sm',
  ActionButton: 'h-[44px] bg-blueDark text-sm font-bold rounded-lg',
  filterButton:
    'h-10 w-10 border-1 border-gray-300 rounded-md flex items-center justify-center p-0',
  downloadTemplate:
    'h-[44px] bg-white border-dividerColor text-sm font-bold rounded-lg text-blueDark border hover:bg-white/90 gap-2',
  EditButton:
    'h-[44px] bg-white border-blueDark text-sm font-bold rounded-lg text-blueDark border hover:bg-white gap-2',
  CancelButton:
    'h-[40px] bg-white border-dividerColor text-sm font-bold rounded-lg text-blueDark border hover:bg-white gap-2',

  SubmitButton:
    'bg-highlight hover:bg-highlight h-[40px] rounded-lg text-base font-bold text-white hover:text-white hover:shadow-md',
};
