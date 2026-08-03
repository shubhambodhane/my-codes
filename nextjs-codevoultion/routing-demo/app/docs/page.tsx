export default function Documents() {
  return (
    <>
      <h3>In this we can catch :all the segments</h3>
      <p>
        This is helpful for displaying the path and differnt component based on
        the address bar.
      </p>
      <p>after the specific path ex. doc/ this is defined path</p>
      <p>
        after this path all the other path can be slug: ex {"doc/fire"} which
        will have length 1
      </p>
      <p>
        after this path all the other path can be slug: ex {"doc/fire/ice"}{" "}
        which will have length 2
      </p>
      <p>
        we can display any element or any component based on the slug length and
        all the conditions failed it will display the last return statement.
      </p>
    </>
  );
}
