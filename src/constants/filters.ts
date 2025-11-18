export type selectItem = { label: string; value:string}

export const categories: selectItem[] = [
  { value: 'all', label: 'همه' },
  { value: 'personal', label: 'شخصی' },
  { value: 'work', label: 'کاری' },
  { value: 'fun', label: 'تفریحی' },
];
export const priorities: selectItem[] = [
  { value: 'all', label: 'همه' },
  { value: 'high', label: 'بالا' },
  { value: 'medium', label: 'متوسط' },
  { value: 'low', label: 'پایین' },
];

export const statuses: selectItem[] = [
  { value: 'all', label: 'همه' },
  { value: 'completed', label: 'تکمیل شده' },
  { value: 'in-progress', label: 'در حال انجام' },
  { value: 'not_started', label: 'بدون وضعیت' },
];

export const sortOption:selectItem[] = [
    { value: "latest", label: "جدیدترین‌ها" },
    { value: "oldest", label: "قدیمی‌ترها" }
];