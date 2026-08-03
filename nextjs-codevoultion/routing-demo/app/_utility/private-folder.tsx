export default function PrivateFolder() {
  return (
    <>
      <h4>Private Folder:</h4>
      <p>How to create? </p>
      <p>
        create folder with prefix underscore. example: _utility, All the files
        and sub folders will be private as main folder is private folder
      </p>
      <p>Next JS will not create route and it will not be accessed by user</p>
      <p>Use cases:</p>
      <ul>
        <li>Keeping your UI logic and Routing logic seperate.</li>
        <li>Easy to organize the internal files.</li>
        <li>Easy to group related files in editor.</li>
        <li>Avoiding naming conflicts.</li>
      </ul>
    </>
  );
}
