import {
  useAddAccountMutation,
  useDeleteAccountMutation,
  useGetAccountsQuery,
  useUpdateAccountMutation,
} from "../api/adminSlice";

const Admin = () => {
  //it gets accounts automatically
  const { data: accounts, error, isLoading, isSucess } = useGetAccountsQuery();
  const [addAccount] = useAddAccountMutation();
  const [deleteAccount] = useDeleteAccountMutation();
  const [updateAccount] = useUpdateAccountMutation();
  return (
    <div className="bonus">
      <p className="componentName">Admin Component</p>
      {accounts?.map((account,i) => (
        <p key={i}>
          {account.id}: {account.amount}
          <button onClick={() => deleteAccount({id:account.id})} style={{marginLeft: '50px'}}>
            Delete account
          </button>
          <button onClick={() => updateAccount({amount: 777,id: account.id})} style={{marginLeft: '50px'}}>
            update account
          </button>

        </p>
      ))}
      <div className="buttons">
        <button onClick={() => addAccount({amount:150,id:accounts.length+1})}>
          Add accounts
        </button>
      </div>
    </div>
  );
};

export default Admin;
