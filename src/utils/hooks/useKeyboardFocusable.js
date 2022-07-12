// pass this hook an onClick callback if you'd like to also fire the function onKeyUp ('Enter')
export default function useKeyboardFocusable(onClickHandler = null) {
  return {
    role: 'button',
    tabIndex: 0,
    onKeyUp: onClickHandler
      ? (e) => {
          if (e.key === 'Enter') {
            onClickHandler(e)
          }
        }
      : () => {},
  }
}
