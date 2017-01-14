package com.example.lime.test;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ListView;
import android.widget.TextView;

import java.util.ArrayList;

/**
 * Created by 장호준 on 2016-06-15.
 */
public class presc_listAdapter extends BaseAdapter {
    private ArrayList<presc_listItem> listViewItemList = new ArrayList<presc_listItem>() ;
    public void addItem(String name, String date, int prescription) {
        presc_listItem item = new presc_listItem();

        item.setName(name);
        item.setCreateAt(date);
        item.setPrescription(prescription);

        listViewItemList.add(item);
    }
    public void remove(String name, String date, int prescription) {
        presc_listItem item = new presc_listItem();

        item.setName("");
        item.setCreateAt("");
        item.setPrescription(0);

        listViewItemList.add(item);
    }

    @Override
    public int getCount() {
        return listViewItemList.size();
    }

    @Override
    public Object getItem(int position) {
        return listViewItemList.get(position);
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        final int pos = position;
        final Context context = parent.getContext();

        if (convertView == null) {
            LayoutInflater inflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            convertView = inflater.inflate(R.layout.presc_itemlist, parent, false);
        }

        TextView date = (TextView) convertView.findViewById(R.id.date);
        TextView name = (TextView) convertView.findViewById(R.id.name);
        TextView prescription = (TextView) convertView.findViewById(R.id.prescription_no);

        presc_listItem list = listViewItemList.get(position);

        date.setText(list.getCreateAt());
        name.setText(list.getName());
        prescription.setText(Integer.toString(list.getPrescription()));
        return convertView;
    }
}
