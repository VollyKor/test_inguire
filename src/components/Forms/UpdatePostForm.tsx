export default function updatePostForm(props: any): JSX.Element {
  const titleId = 'title';
  const bodyId = 'body';
  console.log(props);

  return (
    <form style={{ padding: '15px' }}>
      <label
        htmlFor={titleId}
        style={{ display: 'block', marginBottom: '10px' }}
      >
        <span style={{ display: 'block', marginBottom: '10px' }}>Title</span>
        <input type="text" name="" id={titleId} />
      </label>

      <label
        htmlFor={bodyId}
        style={{ display: 'block', marginBottom: '10px' }}
      >
        <span style={{ display: 'block', marginBottom: '10px' }}>Text</span>
        <textarea id={bodyId} style={{ resize: 'none' }} />
      </label>
      <button type="submit">Save changes</button>
    </form>
  );
}
