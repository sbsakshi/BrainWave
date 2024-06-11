
const Heading = ({className,tittle,text}) => {
  return (
    <div className={`${className} max-w-[50re] mx-auto mb-12 lg:mb-20`}>{
        tittle&& <h2
            className="h2">
                {tittle}
            </h2>
            }
            {
              text && <p className="body-2 mt-4 text-n-4">{text}</p>
            }
    </div>
  )
}

export default Heading