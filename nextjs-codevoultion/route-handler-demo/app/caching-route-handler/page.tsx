function CachingRouteHandler() {
  return (
    <>
      <h4>Cache in Route Handler</h4>
      <p>
        the application we have created will only display current time. on every
        refresh the timer will update as we are on dev build this will continue.
      </p>
      <p>
        <strong>Add Cache</strong> functionality, we need to export const
        dynamic ={"force-static"} and we need production build,to do this
        execute npm run build and npm start. this will run application showing
        the current time on page.
      </p>
      <p>
        <strong>Revalidate</strong>: the data will update after specific time,to
        do this we need to export const revalidate = 10; // seconds in time, the
        time will update and after refresh in 10 section or given revalidate
        time, the stale data will be visible initially meanwhile it fetches
        latest data, once latest time/data is available it will display latest
        data.<strong>Stale concept</strong>
      </p>
    </>
  );
}

export default CachingRouteHandler;
