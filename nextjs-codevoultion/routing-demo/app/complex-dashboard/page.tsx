export default function ComplexDashboard() {
  return (
    <>
      <h4>This is Parallel Route: Complex Dashboard</h4>
      <p>
        Created using feature <strong>Slots</strong> in NextJS.
      </p>
      <p>
        Examaple of Parallel Route: Parent route: @FolderName1 @FolderName3
        @FolderName2
      </p>
      <span>- complex-dashboard {">"}</span>
      <ol>
        <li>@user</li>
        <li>@charts </li>
        <li>@ads </li>
      </ol>
      <p>
        Handled unmathced route error using default page by adding 
        <strong> default.tsx </strong>
        in same level of page and @folder to handle the error if page is
        reloaded.
      </p>
      <p>
        <strong>Conditional Route</strong>: check and change in layout page by change
        loginFlag
      </p>
    </>
  );
}
