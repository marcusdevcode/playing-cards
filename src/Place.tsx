export default function Place({ className, style }: { className?: string; style?: React.CSSProperties }) {
    return (
        <div className={"table-place "+className} style={style}></div>
    );
}