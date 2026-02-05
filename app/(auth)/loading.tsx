// this is the fallback UI whenever there are some async operations, and we are doing SSR, this ensures that the SSR is still happening even when we initially show a loading screen

function loading() {
  return (
    <div>
      Loading ...
    </div>
  )
}

export default loading
