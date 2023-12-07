export const updateSearchParams = (type: string, value: string) => {
   const searchParams = new URLSearchParams(window.location.search);

   searchParams.set(type, value)

return `${window.location.pathname}?${searchParams.toString()}`

}